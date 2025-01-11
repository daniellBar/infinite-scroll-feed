import styled, { css } from 'styled-components';

import { TypographyProps } from './Typography';

export const weightStyles = {
  lighter: 200,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export const typeDictionary = {
  heading: {
    size: '26px',
    line: '24px',
  },
  'heading-sm': {
    size: '18px',
    line: '27px',
  },
  'heading-md': {
    size: '24px',
    line: '34px',
  },
  'heading-xl': {
    size: '28px',
    line: '37px',
  },
  'heading-xxl': {
    size: '45px',
    line: '37px',
  },
  subheading: {
    size: '16px',
    line: '20px',
  },
  'subheading-xl': {
    size: '20px',
    line: '34px',
  },
  body: {
    size: '14px',
    line: '22px',
  },
  'body-semibold': {
    size: '14px',
    line: '22px',
  },
  caption: {
    size: '12px',
    line: '19px',
  },
  'x-small': {
    size: '11px',
    line: '16px',
  },
  'btn-medium-big': {
    size: '16px',
    line: '20px',
  },
  'button-sm': {
    size: '14px',
    line: '16px',
  },
};

type Props = Pick<TypographyProps, 'color' | 'type'> & {
  $weight: keyof typeof weightStyles;
};

export const StyledTypography = styled.div<Props>`
  ${(props) => css`
    font-weight: ${props.$weight && weightStyles[props.$weight]};
    font-size: ${props.type && typeDictionary[props.type].size};
    line-height: ${props.type && typeDictionary[props.type].line};
    color: ${props.color};
  `}
`;
