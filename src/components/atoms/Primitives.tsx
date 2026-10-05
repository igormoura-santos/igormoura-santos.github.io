import styled from 'styled-components';
export const Container = styled.div`width: min(100% - 64px, ${({ theme }) => theme.width}); margin-inline: auto; @media(max-width: 600px) { width: calc(100% - 36px); }`;
export const Eyebrow = styled.p`font-family: monospace; font-size: 12px; letter-spacing: .12em; text-transform: uppercase; display: flex; align-items: center; gap: 12px; &::before { content: ''; width: 7px; height: 7px; background: ${({ theme }) => theme.colors.orange}; }`;
export const Action = styled.a`display: inline-flex; align-items: center; justify-content: space-between; gap: 36px; padding: 18px 22px; background: ${({ theme }) => theme.colors.orange}; color: #181918; font-weight: 700; font-size: 14px; transition: transform .25s, background .25s; &:hover { transform: translateY(-4px); background: #ff744f; }`;
export const Tag = styled.span`display: inline-block; border: 1px solid currentColor; border-radius: 30px; padding: 7px 11px; font: 11px monospace;`;
