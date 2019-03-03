import React, { Component } from 'react';
import './Accordion.scss';
import AccordionItem from './AccordionItem';

class Accordion extends Component {
  state = {
    current: 1
  };

  handleToggle = itemIndex => {
    this.setState(({ current }) => {
      return itemIndex === current ? { current: 0 } : { current: itemIndex };
    });
  };

  render() {
    return (
      <div className="elr-accordion">
        <AccordionItem
          handleToggle={this.handleToggle}
          index={1}
          label="Accordion Item One"
          status={this.state.current === 1 ? 'show' : 'hide'}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            consequuntur iusto, alias adipisci ducimus similique delectus animi
            nemo sunt nobis modi dolorum dolorem incidunt laudantium eveniet quo
            aliquam illum voluptatum?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            veniam esse eaque quam rerum deserunt!
          </p>
        </AccordionItem>
        <AccordionItem
          handleToggle={this.handleToggle}
          index={2}
          label="Accordion Item Two"
          status={this.state.current === 2 ? 'show' : 'hide'}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            voluptatum nostrum vitae, ex est nobis voluptates odio officia
            tempore, quasi atque dolore ut at id iste praesentium. Corporis,
            illum. Obcaecati.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed rem ea
            architecto, pariatur! Architecto, quisquam.
          </p>
        </AccordionItem>
        <AccordionItem
          handleToggle={this.handleToggle}
          index={3}
          label="Accordion Item Three"
          status={this.state.current === 3 ? 'show' : 'hide'}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
            nostrum pariatur facere qui fugit perspiciatis, sint, tenetur ex
            provident optio maiores aperiam culpa architecto accusantium eos
            delectus illo nisi, repellendus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            consequatur, quibusdam, ipsa fuga quidem laudantium!
          </p>
        </AccordionItem>
        <AccordionItem
          handleToggle={this.handleToggle}
          index={4}
          label="Accordion Item Four"
          status={this.state.current === 4 ? 'show' : 'hide'}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
            eius nobis id iste, ipsum libero, porro dignissimos unde voluptatem
            sapiente ab dolore corrupti asperiores aliquid cumque veniam facere,
            voluptates omnis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            nam ducimus laboriosam recusandae, repellat quos.
          </p>
        </AccordionItem>
        <AccordionItem
          handleToggle={this.handleToggle}
          index={5}
          label="Accordion Item Five"
          status={this.state.current === 5 ? 'show' : 'hide'}
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
            distinctio recusandae ducimus atque, vitae expedita ut. Nesciunt
            sunt quasi fugiat. Perferendis modi consequuntur temporibus tempore
            atque natus ipsam, ratione et.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
            cupiditate nisi quibusdam, voluptatibus praesentium, sed.
          </p>
        </AccordionItem>
      </div>
    );
  }
}

export default Accordion;
