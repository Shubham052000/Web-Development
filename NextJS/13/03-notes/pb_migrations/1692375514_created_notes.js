/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "64hf8wbdpwznpy0",
    "created": "2023-08-18 16:18:34.261Z",
    "updated": "2023-08-18 16:18:34.261Z",
    "name": "notes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ffjx0ktk",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "nybanewj",
        "name": "content",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("64hf8wbdpwznpy0");

  return dao.deleteCollection(collection);
})
