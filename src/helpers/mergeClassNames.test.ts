import { describe, it, expect } from 'vitest';
import { mergeClassNames } from './mergeClassNames';

describe('mergeClassNames', () => {
  it('combina múltiplas strings de classes', () => {
    const result = mergeClassNames('bg-red-500', 'text-white', 'p-4');
    expect(result).toBe('bg-red-500 text-white p-4');
  });

  it('remove classes duplicadas do Tailwind', () => {
    const result = mergeClassNames('bg-red-500', 'bg-blue-500');
    expect(result).toBe('bg-blue-500');
  });

  it('lida com arrays de classes', () => {
    const result = mergeClassNames(['bg-red-500', 'text-white'], 'p-4');
    expect(result).toBe('bg-red-500 text-white p-4');
  });

  it('lida com objetos condicionais', () => {
    const result = mergeClassNames('base-class', {
      'conditional-class': true,
      'other-class': false
    });
    expect(result).toBe('base-class conditional-class');
  });

  it('lida com valores falsy', () => {
    const result = mergeClassNames('base-class', null, undefined, false, '');
    expect(result).toBe('base-class');
  });

  it('lida com strings vazias', () => {
    const result = mergeClassNames('', 'bg-red-500', '');
    expect(result).toBe('bg-red-500');
  });

  it('lida com apenas valores falsy', () => {
    const result = mergeClassNames(null, undefined, false, '');
    expect(result).toBe('');
  });

  it('lida com classes complexas do Tailwind', () => {
    const result = mergeClassNames(
      'bg-red-500 hover:bg-red-600',
      'bg-blue-500 hover:bg-blue-600'
    );
    expect(result).toBe('bg-blue-500 hover:bg-blue-600');
  });

  it('preserva classes customizadas', () => {
    const result = mergeClassNames('bg-red-500', 'custom-class', 'bg-blue-500');
    expect(result).toBe('custom-class bg-blue-500');
  });

  it('lida com classes com espaços extras', () => {
    const result = mergeClassNames('  bg-red-500  ', '  text-white  ');
    expect(result).toBe('bg-red-500 text-white');
  });

  it('lida com arrays aninhados', () => {
    const result = mergeClassNames(
      ['bg-red-500', ['text-white', 'p-4']],
      'm-2'
    );
    expect(result).toBe('bg-red-500 text-white p-4 m-2');
  });

  it('lida com objetos aninhados', () => {
    const result = mergeClassNames(
      'base-class',
      { 'conditional-class': true },
      { 'nested-conditional': true }
    );
    expect(result).toBe('base-class conditional-class nested-conditional');
  });

  it('lida com classes responsivas do Tailwind', () => {
    const result = mergeClassNames(
      'bg-red-500 md:bg-blue-500',
      'bg-green-500 md:bg-yellow-500'
    );
    expect(result).toBe('bg-green-500 md:bg-yellow-500');
  });

  it('lida com classes de estado do Tailwind', () => {
    const result = mergeClassNames(
      'bg-red-500 hover:bg-red-600 focus:bg-red-700',
      'bg-blue-500 hover:bg-blue-600'
    );
    expect(result).toBe('focus:bg-red-700 bg-blue-500 hover:bg-blue-600');
  });

  it('lida com classes arbitrárias do Tailwind', () => {
    const result = mergeClassNames('bg-[#ff0000]', 'bg-[#0000ff]');
    expect(result).toBe('bg-[#0000ff]');
  });

  it('lida com classes com modificadores', () => {
    const result = mergeClassNames('dark:bg-gray-800', 'dark:bg-gray-900');
    expect(result).toBe('dark:bg-gray-900');
  });

  it('lida com classes de animação', () => {
    const result = mergeClassNames('animate-spin', 'animate-pulse');
    expect(result).toBe('animate-pulse');
  });

  it('lida com classes de transição', () => {
    const result = mergeClassNames(
      'transition-all duration-300',
      'transition-colors duration-500'
    );
    expect(result).toBe('transition-colors duration-500');
  });
});
