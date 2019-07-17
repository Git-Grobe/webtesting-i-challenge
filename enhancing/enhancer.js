module.exports = {
  succeed,
  fail,
  repair,
  get,
};

// SUCCEED
function succeed(item) {
  return { ...item , enhancement: item.enhancement === 20 ? item.enhancement : item.enhancement + 1};
}

// FAIL
function fail(item) {
  const failItem = {...item} ;

  if (item.enhancement < 15) {
    failItem.durability = (failItem.durability - 5);
  } else {
    failItem.durability = (failItem.durability - 10);
  }
  if (item.enhancement >= 16) {
    failItem.enhancement = (failItem.enhancement - 1) 
  }

  return failItem;
}

// REPAIR 
function repair(item) {
  return { ...item , durability: 100};
}

// GET
function get(item) {
  return { ...item };
}
