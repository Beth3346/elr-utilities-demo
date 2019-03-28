import React from 'react';
import { getByTestId, getByText } from 'dom-testing-library';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Accordion from '@/components/Accordion/Accordion';

describe('Accordion', () => {
  const items = [
    {
      id: 1,
      label: 'Accordion Item One',
      content: (
        <div>
          <p>some accordion content One</p>
        </div>
      )
    },
    {
      id: 2,
      label: 'Accordion Item Two',
      content: (
        <div>
          <p>some accordion content Two</p>
        </div>
      )
    },
    {
      id: 3,
      label: 'Accordion Item Three',
      content: (
        <div>
          <p>some accordion content Three</p>
        </div>
      )
    }
  ];
  it('should toggle on click', () => {
    const { container } = render(<Accordion items={items} />);
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
  it('should show a default', () => {
    const { container } = render(
      <Accordion items={items} initialCurrent={2} />
    );
    const secondLabel = getByTestId(container, 'accordion-label-2');
    const secondContent = getByTestId(container, 'accordion-content-2');

    expect(secondLabel.classList.contains('active')).toBe(true);
    expect(secondContent.classList.contains('active')).toBe(true);

    const firstLabel = getByTestId(container, 'accordion-label-1');
    const firstContent = getByTestId(container, 'accordion-content-1');

    expect(firstLabel.classList.contains('active')).toBe(false);
    expect(firstContent.classList.contains('active')).toBe(false);
  });
  it('should display items', () => {
    const { container } = render(<Accordion items={items} />);
    getByText(container, 'Accordion Item One');
    getByText(container, 'some accordion content One');
  });
  it('should display the first item by default', () => {
    const { container } = render(<Accordion items={items} />);
    const firstLabel = getByTestId(container, 'accordion-label-1');
    const firstContent = getByTestId(container, 'accordion-content-1');

    expect(firstLabel.classList.contains('active')).toBe(true);
    expect(firstContent.classList.contains('active')).toBe(true);
  });
});
