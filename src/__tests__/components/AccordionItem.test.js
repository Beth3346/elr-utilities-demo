import React from 'react';
import { getByText, getByTestId } from 'dom-testing-library';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import AccordionItem from '@/components/Accordion/AccordionItem';

describe('AccordionItem', () => {
  it('should accept some props', () => {
    const { container } = render(
      <AccordionItem
        label="Accordion Label"
        status="show"
        handleToggle={() => {}}
        id={1}
      >
        <p>This is some content</p>
      </AccordionItem>
    );

    const firstLabel = getByText(container, 'Accordion Label');
    const firstContent = getByTestId(container, 'accordion-content-1');

    expect(firstLabel.classList.contains('active')).toBe(true);
    expect(firstContent.classList.contains('active')).toBe(true);
  });
});
