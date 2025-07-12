import type { SVGProps } from 'react';
import type { IconVariants } from './Icon.style';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export type IconName = keyof typeof dynamicIconImports;

export interface IconProps
  extends Omit<SVGProps<SVGSVGElement>, 'ref'>,
    IconVariants {
  /**
   * Nome do ícone do Lucide (ex: 'home', 'search', 'heart')
   */
  iconName: IconName;
  /**
   * Classes CSS adicionais
   */
  className?: string;
  /**
   * Função de clique
   */
  onClick?: () => void;
  /**
   * Descrição para acessibilidade
   */
  'aria-label'?: string;
  /**
   * Esconde do leitor de tela
   */
  'aria-hidden'?: boolean;
}
