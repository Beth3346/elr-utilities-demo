export const findItem = (id, items, name = 'items') => {
  function findItem(items, id) {
    let item;

    // if there are no items just return
    if (!items) {
      return;
    }

    items.forEach(o => {
      if (item) {
        return;
      }

      if (o.id === id) {
        item = o;
      } else if (!item) {
        // keep checking nested items
        item = findItem(o[name], id);
      }
    });

    if (item) {
      return item;
    }
  }

  return findItem(items, id);
};

export const getLargestId = (items, name = 'items', max = 0) => {
  function findMax(items, name, max) {
    // if there are no items just return
    if (!items) {
      return;
    }

    items.forEach(o => {
      if (o.id > max) {
        max = o.id;
      }

      if (o[name] && o[name].length) {
        // keep checking nested items
        max = findMax(o[name], name, max);
      }
    });

    return max;
  }

  return findMax(items, name, max);
};

export const getNextId = (items, name = 'items') => {
  return getLargestId(items, name) + 1;
};

export default {
  findItem,
  getLargestId,
  getNextId
};
