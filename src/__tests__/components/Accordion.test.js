import React from 'react';
import { getByTestId } from 'dom-testing-library';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Accordion from '@/components/Accordion/Accordion';

test('accordion toggle', () => {
  const { container } = render(<Accordion />);
  const firstLabel = getByTestId(container, 'accordion-label-1');
  const firstContent = getByTestId(container, 'accordion-content-1');

  expect(firstLabel.classList.contains('active')).toBe(true);
  expect(firstContent.classList.contains('active')).toBe(true);

  firstLabel.click();

  expect(firstLabel.classList.contains('active')).toBe(false);
  expect(firstContent.classList.contains('active')).toBe(false);

  firstLabel.click();

  expect(firstLabel.classList.contains('active')).toBe(true);
  expect(firstContent.classList.contains('active')).toBe(true);

  const thirdLabel = getByTestId(container, 'accordion-label-3');
  const thirdContent = getByTestId(container, 'accordion-content-3');

  thirdLabel.click();

  expect(thirdLabel.classList.contains('active')).toBe(true);
  expect(thirdContent.classList.contains('active')).toBe(true);
  expect(firstLabel.classList.contains('active')).toBe(false);
  expect(firstContent.classList.contains('active')).toBe(false);
});
