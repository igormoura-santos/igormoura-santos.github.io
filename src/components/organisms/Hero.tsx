import styled, { keyframes } from 'styled-components';
import { ArrowRight } from 'lucide-react';
import { Action, Eyebrow } from '../atoms/Primitives';
const arrive = keyframes`from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); }`;
const drift = keyframes`0%,100% { transform: scale(1.02) translateY(0); } 50% { transform: scale(1.05) translateY(-8px); }`;
const Section = styled.section`position: relative; isolation: isolate; overflow: hidden; min-height: 690px; display: grid; place-items: center; background: #121313;
  &::before { content: ''; position: absolute; inset: 0; z-index: -2; background: url('/hero-gadgets.png') center / cover no-repeat; animation: ${drift} 12s ease-in-out infinite; }
  &::after { content: ''; position: absolute; inset: 0; z-index: -1; background: radial-gradient(ellipse at center, #10111195 0%, #10111115 60%); }
  @media(min-width: 1400px) { min-height: 790px; } @media(max-width: 650px) { min-height: 600px; &::before { opacity: .55; } }
`;
const Content = styled.div`text-align: center; padding: 80px 20px 70px; width: 100%; animation: ${arrive} .8s both; ${Eyebrow} { justify-content: center; font-size: 11px; letter-spacing: .25em; &::before { display: none; } }`;
const Title = styled.h1`font-size: clamp(72px, 9.5vw, 135px); line-height: .87; letter-spacing: -.075em; font-weight: 950; margin: 24px auto 32px; span { display: block; color: #ff572d; position: relative; width: fit-content; margin: auto; &::after { content: ''; position: absolute; left: 0; right: 0; bottom: -12px; height: 7px; border-top: 4px solid #ff572d; border-bottom: 2px solid #ff572d; transform: rotate(-3deg); } }`;
const CTA = styled(Action)`margin-top: 18px; clip-path: polygon(2% 0,98% 3%,100% 15%,98% 30%,100% 48%,98% 70%,100% 91%,97% 100%,0 97%,2% 80%,0 58%,2% 35%,0 14%); padding: 17px 28px;`;
const Scribble = styled.span`position: absolute; font: italic 13px monospace; text-transform: uppercase; letter-spacing: .15em; line-height: 1.6; transform: rotate(-12deg); top: 70px; left: 8%; color: #eeeae2b0; @media(max-width:900px) { display: none; }`;
export function Hero() { return <Section id="inicio"><Scribble>Jogos<br/>ideias<br/>pessoas<br/>cultura ↗</Scribble><Content><Eyebrow>Design gráfico + Game design</Eyebrow><Title>Design<br/>que ganha<span>vida.</span></Title><CTA href="#projetos">Explorar projetos <ArrowRight size={19}/></CTA></Content></Section>; }
