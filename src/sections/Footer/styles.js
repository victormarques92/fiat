import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';
import Colors from '../../styles/colors';

export const Container = styled.section`
  display: block;
  margin: 0 auto;
  padding: 2.75rem calc(((100% - 71.25rem) / 2) + 6.25rem) 1rem;
`;

export const Social = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
`;

export const SocialItem = styled.a`
  align-items: center;
  color: ${Colors.white};
  display: inline-flex;
  font-size: 1.5rem;
  height: 2.813rem;
  justify-content: center;
  transition: 0.3s ease-in-out;
  width: 3.125rem;

  &:hover {
    ${switchProp('title', {
      facebook: css`
        background-color: #3d5b99;
      `,
      instagram: css`
        background-color: #833ab4;
      `,
      twitter: css`
        background-color: #00aced;
      `,
      youtube: css`
        background-color: #e64a41;
      `,
    })}
  }
`;

export const Text = styled.p`
  color: ${Colors.white};
  font-size: 0.9375rem;
  line-height: 1rem;
  text-align: center;
`;
