import React from 'react';
import {DropTarget} from 'react-dnd';

import {itemTypes} from '../../staticContent/dragConstants';
import CategoryItem from './CategoryItem';

const boardTarget = {
  drop(props, monitor) {
    if (!monitor.didDrop()) {
      const card = monitor.getItem();
      // Handle the drop only if a category did not handle it first
      props.onDrop(card.id, card.position);
    }
    props.removeEmptyCategories(props.categories);
  },
};

/**
 *
 * @param {*} connect
 * @param {*} monitor
 * @return {*}
 */
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
  };
}

const Board = ({categories, onClick, onCardClick, onCategTitleClick,
  changeTitleID, onCardDrop, onDrop, descriptionID, onCategTitleChange,
  onCategTitleFinish, removeEmptyCategories, connectDropTarget, isOver}) => {
  categories = categories.map((category) => (
    <CategoryItem key={'k' + category.id} id={category.id}
      title={category.title} cards={category.cards} onClick={onCardClick}
      onTitleChange={onCategTitleChange}
      onTitleClick={onCategTitleClick} onCardDrop={onCardDrop}
      onTitleFinish={onCategTitleFinish}
      showTitleBox={category.id === changeTitleID}
      descriptionID={descriptionID}/>
  ));

  return connectDropTarget(<ul id='board' onClick={onClick}>
    {
      categories
    }
  </ul>);
};

// TODO
// Board.protoTypes = {
//   cards: PropTypes.arrayOf(
//   )
// }


export default DropTarget(itemTypes.CARD,
    boardTarget, collect)(Board);