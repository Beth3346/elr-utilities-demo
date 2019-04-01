import { findItem, getLargestId, getNextId } from '../../utilities/utils';

describe('findItem', () => {
  it('should find the item', () => {
    const items = [
      {
        id: 1
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ];
    expect(findItem(2, items)).toEqual(items[1]);
  });
  it('should find nested items', () => {
    const items = [
      {
        id: 1,
        items: [
          {
            id: 4
          },
          {
            id: 5
          },
          {
            id: 6
          }
        ]
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ];
    expect(findItem(5, items)).toEqual(items[0].items[1]);
  });
  it('should find deeply nested items', () => {
    const items = [
      {
        id: 1,
        items: [
          {
            id: 4
          },
          {
            id: 5,
            items: [
              {
                id: 7
              }
            ]
          },
          {
            id: 6
          }
        ]
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ];
    expect(findItem(7, items)).toEqual(items[0].items[1].items[0]);
  });
  it('should take an array key name', () => {
    const items = [
      {
        id: 1,
        replies: [
          {
            id: 4
          },
          {
            id: 5
          },
          {
            id: 6
          }
        ]
      },
      {
        id: 2
      },
      {
        id: 3
      }
    ];
    expect(findItem(5, items, 'replies')).toEqual(items[0].replies[1]);
  });
  describe('getLargestId', () => {
    it('should return the largest id', () => {
      const items = [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ];
      expect(getLargestId(items)).toEqual(3);
    });
    it('should return the largest id when items are not ordered', () => {
      const items = [
        {
          id: 1
        },
        {
          id: 3
        },
        {
          id: 2
        }
      ];
      expect(getLargestId(items)).toEqual(3);
    });
    it('should handle nested arrays', () => {
      const items = [
        {
          id: 1,
          items: [
            {
              id: 4
            },
            {
              id: 5,
              items: [
                {
                  id: 7
                }
              ]
            },
            {
              id: 6
            }
          ]
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ];
      expect(getLargestId(items)).toEqual(7);
    });
    it('should take a name argument', () => {
      const items = [
        {
          id: 1,
          replies: [
            {
              id: 4
            },
            {
              id: 5,
              replies: [
                {
                  id: 7
                }
              ]
            },
            {
              id: 6
            }
          ]
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ];
      expect(getLargestId(items, 'replies')).toEqual(7);
    });
  });
  describe('nextId', () => {
    it('should return the next id', () => {
      const items = [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ];
      expect(getNextId(items)).toEqual(4);
    });
    it('should return the next id when items are not ordered', () => {
      const items = [
        {
          id: 1
        },
        {
          id: 3
        },
        {
          id: 2
        }
      ];
      expect(getNextId(items)).toEqual(4);
    });
    it('should handle nested arrays', () => {
      const items = [
        {
          id: 1,
          items: [
            {
              id: 4
            },
            {
              id: 5,
              items: [
                {
                  id: 7
                }
              ]
            },
            {
              id: 6
            }
          ]
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ];
      expect(getNextId(items)).toEqual(8);
    });
    it('should take a name argument', () => {
      const items = [
        {
          id: 1,
          replies: [
            {
              id: 4
            },
            {
              id: 5,
              replies: [
                {
                  id: 7
                }
              ]
            },
            {
              id: 6
            }
          ]
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ];
      expect(getNextId(items, 'replies')).toEqual(8);
    });
  });
});
