export const categoryData = [
  {
    id: 12,
    created_by: {
      id: 3,
      username: "johnwick",
    },
    name: "baby oils/soaps",
    created_at: "2024-11-04T10:23:24.837674",
  },
  {
    id: 11,
    created_by: {
      id: 3,
      username: "johnwick",
    },
    name: "inhalers",
    created_at: "2024-11-04T10:10:54.811875",
  },
  {
    id: 10,
    created_by: {
      id: 3,
      username: "johnwick",
    },
    name: "lotions",
    created_at: "2024-11-04T10:10:54.808430",
  },
  {
    id: 9,
    created_by: {
      id: 3,
      username: "johnwick",
    },
    name: "suppositories",
    created_at: "2024-11-04T10:10:54.804652",
  },
  {
    id: 8,
    created_by: {
      id: 3,
      username: "johnwick",
    },
    name: "drops",
    created_at: "2024-11-04T10:10:54.801019",
  },
  {
    id: 7,
    created_by: {
      id: 3,
      username: "johnwick",
    },
    name: "creams",
    created_at: "2024-11-04T10:10:54.798022",
  },
  {
    id: 6,
    created_by: {
      id: 3,
      username: "johnwick",
    },
    name: "powders",
    created_at: "2024-11-04T10:10:54.794578",
  },
  {
    id: 5,
    created_by: {
      id: 3,
      username: "johnwick",
    },
    name: "capsules",
    created_at: "2024-11-04T10:10:54.791092",
  },
  {
    id: 4,
    created_by: {
      id: 3,
      username: "johnwick",
    },
    name: "ointments",
    created_at: "2024-11-04T10:10:54.787933",
  },
  {
    id: 3,
    created_by: {
      id: 3,
      username: "johnwick",
    },
    name: "syrups",
    created_at: "2024-11-04T10:10:54.783579",
  },
  {
    id: 2,
    created_by: {
      id: 3,
      username: "johnwick",
    },
    name: "injections",
    created_at: "2024-11-04T10:10:54.779687",
  },
  {
    id: 1,
    created_by: {
      id: 3,
      username: "johnwick",
    },
    name: "tablets",
    created_at: "2024-11-04T10:10:54.774343",
  },
];
export const inventoryCatagory = [
  {
    id: 13,
    name: "antibiotics tablets",
  },
  {
    id: 12,
    name: "baby oils/soaps",
  },
  {
    id: 11,
    name: "inhalers",
  },
  {
    id: 10,
    name: "lotions",
  },
  {
    id: 9,
    name: "suppositories",
  },
  {
    id: 8,
    name: "drops",
  },
  {
    id: 7,
    name: "creams",
  },
  {
    id: 6,
    name: "powders",
  },
  {
    id: 5,
    name: "capsules",
  },
  {
    id: 4,
    name: "ointments",
  },
  {
    id: 3,
    name: "syrups",
  },
  {
    id: 2,
    name: "injections",
  },
  {
    id: 1,
    name: "tablets",
  },
];
export const allMedicineList = {
  count: 40,
  next: "http://127.0.0.1:8000/inventory/medicines/?page=2",
  previous: null,
  results: [
    {
      id: 1,
      stock: {
        quantity: 85,
        reorder_level: 9,
      },
      category: {
        id: 11,
        name: "inhalers",
      },
      created_by: {
        id: 3,
        username: "johnwick",
      },
      product_id: "PID-0001",
      name: "Paracetamol Tablet",
      drug: "Acetaminophen",
      dosage: "100mg",
      unit_price: "37.22",
      expiry_date: "2026-02-14",
      side_effects: "Dry mouth",
      created_at: "2024-11-04T10:18:55.327787",
    },
    {
      id: 2,
      stock: {
        quantity: 23,
        reorder_level: 7,
      },
      category: {
        id: 10,
        name: "lotions",
      },
      created_by: {
        id: 3,
        username: "johnwick",
      },
      product_id: "PID-0002",
      name: "Ibuprofen Capsule",
      drug: "Ibuprofen",
      dosage: "1g",
      unit_price: "48.04",
      expiry_date: "2027-07-05",
      side_effects: "Dizziness",
      created_at: "2024-11-04T10:18:55.338461",
    },
    {
      id: 3,
      stock: {
        quantity: 37,
        reorder_level: 20,
      },
      category: {
        id: 9,
        name: "suppositories",
      },
      created_by: {
        id: 3,
        username: "johnwick",
      },
      product_id: "PID-0003",
      name: "Amoxicillin Syrup",
      drug: "Amoxicillin",
      dosage: "100mg",
      unit_price: "12.77",
      expiry_date: "2027-04-04",
      side_effects: "Dry mouth",
      created_at: "2024-11-04T10:18:55.343448",
    },
    {
      id: 4,
      stock: {
        quantity: 98,
        reorder_level: 15,
      },
      category: {
        id: 8,
        name: "drops",
      },
      created_by: {
        id: 3,
        username: "johnwick",
      },
      product_id: "PID-0004",
      name: "Cetirizine Tablet",
      drug: "Cetirizine",
      dosage: "100mg",
      unit_price: "10.82",
      expiry_date: "2027-05-10",
      side_effects: "Nausea",
      created_at: "2024-11-04T10:18:55.348466",
    },
    {
      id: 5,
      stock: {
        quantity: 90,
        reorder_level: 12,
      },
      category: {
        id: 7,
        name: "creams",
      },
      created_by: {
        id: 3,
        username: "johnwick",
      },
      product_id: "PID-0005",
      name: "Aspirin Tablet",
      drug: "Aspirin",
      dosage: "5mg",
      unit_price: "39.71",
      expiry_date: "2027-06-24",
      side_effects: "Headache",
      created_at: "2024-11-04T10:18:55.352783",
    },
    {
      id: 6,
      stock: {
        quantity: 27,
        reorder_level: 19,
      },
      category: {
        id: 11,
        name: "inhalers",
      },
      created_by: {
        id: 3,
        username: "johnwick",
      },
      product_id: "PID-0006",
      name: "Metformin Tablet",
      drug: "Metformin",
      dosage: "500mg",
      unit_price: "35.32",
      expiry_date: "2026-01-05",
      side_effects: "Nausea",
      created_at: "2024-11-04T10:18:55.356773",
    },
    {
      id: 7,
      stock: {
        quantity: 60,
        reorder_level: 16,
      },
      category: {
        id: 10,
        name: "lotions",
      },
      created_by: {
        id: 3,
        username: "johnwick",
      },
      product_id: "PID-0007",
      name: "Simvastatin Tablet",
      drug: "Simvastatin",
      dosage: "1g",
      unit_price: "30.59",
      expiry_date: "2025-03-18",
      side_effects: "Headache",
      created_at: "2024-11-04T10:18:55.361430",
    },
    {
      id: 8,
      stock: {
        quantity: 29,
        reorder_level: 20,
      },
      category: {
        id: 9,
        name: "suppositories",
      },
      created_by: {
        id: 3,
        username: "johnwick",
      },
      product_id: "PID-0008",
      name: "Atorvastatin Tablet",
      drug: "Atorvastatin",
      dosage: "250mg",
      unit_price: "42.44",
      expiry_date: "2027-04-02",
      side_effects: "Drowsiness",
      created_at: "2024-11-04T10:18:55.366113",
    },
    {
      id: 9,
      stock: {
        quantity: 35,
        reorder_level: 10,
      },
      category: {
        id: 8,
        name: "drops",
      },
      created_by: {
        id: 3,
        username: "johnwick",
      },
      product_id: "PID-0009",
      name: "Pantoprazole Injection",
      drug: "Pantoprazole",
      dosage: "5mg",
      unit_price: "7.02",
      expiry_date: "2026-07-07",
      side_effects: "Dry mouth",
      created_at: "2024-11-04T10:18:55.370189",
    },
    {
      id: 10,
      stock: {
        quantity: 70,
        reorder_level: 18,
      },
      category: {
        id: 7,
        name: "creams",
      },
      created_by: {
        id: 3,
        username: "johnwick",
      },
      product_id: "PID-0010",
      name: "Lisinopril Tablet",
      drug: "Lisinopril",
      dosage: "250mg",
      unit_price: "44.23",
      expiry_date: "2026-10-07",
      side_effects: "Headache",
      created_at: "2024-11-04T10:18:55.374254",
    },
  ],
};
