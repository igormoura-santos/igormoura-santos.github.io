import { useState } from 'react';
import styled from 'styled-components';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Container } from '../atoms/Primitives';
const Bar = styled.header`position: sticky; top: 0; z-index: 10; background: #181918ed; backdrop-filter: blur(14px); border-bottom: 1px solid #ffffff15;`;
const Row = styled(Container)`height: 80px; display: flex; align-items: center; justify-content: space-between;`;
const Logo = styled.a`font-size: 20px; font-weight: 900; line-height: .85; letter-spacing: -.06em; span { color: #ff572d; }`;
const Nav = styled.nav<{ $open: boolean }>`display: flex; gap: 36px; align-items: center; a { font-size: 13px; display: flex; gap: 8px; align-items: center; } a:hover { color: #ff572d; } @media(max-width: 650px) { display: ${({ $open }) => $open ? 'flex' : 'none'}; position: absolute; top: 80px; left: 0; right: 0; padding: 28px; background: #181918; flex-direction: column; align-items: flex-start; border-bottom: 1px solid #ffffff30; }`;
const Toggle = styled.button`display: none; background: none; border: 0; color: inherit; padding: 8px; @media(max-width: 650px) { display: block; }`;
export function Header() { const [open, setOpen] = useState(false); return <Bar><Row><Logo href="#inicio" aria-label="Igor Moura, início">IGOR<span>↗</span><br/>MOURA.</Logo><Nav $open={open} aria-label="Menu principal">{[['Projetos','#projetos'],['Sobre','#sobre'],['Experiência','#experiencia'],['Vamos conversar','#contato']].map(([text,link]) => <a href={link} key={link} onClick={() => setOpen(false)}>{text}{link === '#contato' && <ArrowUpRight size={16}/>}</a>)}</Nav><Toggle onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? 'Fechar menu' : 'Abrir menu'}>{open ? <X/> : <Menu/>}</Toggle></Row></Bar>; }
