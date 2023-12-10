import {render} from '@testing-library/react';
import {Seo} from '../../src/components/Seo';
import React from 'react';

jest.mock('next/router', () => jest.requireActual('next-router-mock'));

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({children}) => {
      return <>{children}</>;
    },
  };
});

describe('Seo', () => {
  it('Should set title correctly when providing title', () => {
    const props = {
      title: 'Test Title',
      titleForTitleTag: undefined,
      description: 'Test Description',
      image: '/test-image.png',
      isHomePage: true,
      searchOrder: 123,
    };
    render(<Seo {...props} />, {
      container: document.head,
    });

    expect(document.title).toBe(props.title);
    // Add additional assertions as needed
  });

  it('Should set title correctly when providing titleForTitleTag', () => {
    const props = {
      title: 'Test Title',
      titleForTitleTag: 'Test Title for Title Tag',
      description: 'Test Description',
      image: '/test-image.png',
      isHomePage: true,
      searchOrder: 123,
    };
    render(<Seo {...props} />, {
      container: document.head,
    });

    expect(document.title).toBe(props.titleForTitleTag);
    // Add additional assertions as needed
  });

  it('Should set title correctly when providing title and not on HomePage', () => {
    const props = {
      title: 'Test Title',
      description: 'Test Description',
      image: '/test-image.png',
      isHomePage: false,
      searchOrder: 123,
    };
    render(<Seo {...props} />, {
      container: document.head,
    });

    expect(document.title).toBe(props.title + ' – React');
    // Add additional assertions as needed
  });

  it('Should render meta description tag correctly', () => {
    const props = {
      title: 'Test Title',
      description: 'Test Description',
      image: '/test-image.png',
      isHomePage: true,
      searchOrder: 123,
    };
    render(<Seo {...props} />, {
      container: document.head,
    });

    const meta = document.querySelector("meta[property='og:description']");
    expect(meta.content).toBe(
      'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript. React is designed to let you seamlessly combine components written by independent people, teams, and organizations.'
    );
  });

  it('Should render meta description tag correctly when not on HomePage', () => {
    const props = {
      title: 'Test Title',
      description: 'Test Description',
      image: '/test-image.png',
      isHomePage: false,
      searchOrder: 123,
    };
    render(<Seo {...props} />, {
      container: document.head,
    });

    const meta = document.querySelector("meta[property='og:description']");
    expect(meta.content).toBe('The library for web and native user interfaces');
  });
});
