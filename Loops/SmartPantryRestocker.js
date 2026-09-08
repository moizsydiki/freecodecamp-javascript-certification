const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

const parseShipment = (rawData) => {
  const pantry = rawData.reduce((acc, item) => {
    const [sku, name, qty, expires, zone = "general"] = item.split("|");

    if (acc.some((product) => product.sku === sku)) {
      return acc;
    }

    acc.push({
      sku,
      name,
      qty: Number(qty),
      expires,
      zone,
    });

    return acc;
  }, []);

  return pantry;
};

const planRestock = (pantry, shipment) => {
  return shipment.map((item) => {
    if (item.qty <= 0) {
      return {
        type: "discard",
        item,
      };
    }

    const exists = pantry.some((pantryItem) => pantryItem.sku === item.sku);

    return {
      type: exists ? "restock" : "donate",
      item,
    };
  });
};

const groupByZone = (actions) => {
  return actions.reduce((acc, action) => {
    const zone = action.item.zone;

    if (!acc[zone]) {
      acc[zone] = [];
    }

    acc[zone].push(action);

    return acc;
  }, {});
};

const clonePantry = (pantry) => {
  return pantry.map((item) => ({
    ...item,
  }));
};

const shipment = parseShipment(rawData);

const pantryCopy = clonePantry(pantry);

const actions = planRestock(pantryCopy, shipment);

const groupedActions = groupByZone(actions);

console.log(groupedActions);
