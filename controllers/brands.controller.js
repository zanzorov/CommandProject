const Brand = require("../models/Brand.model.js");

module.exports = brandController = {
  postBrand: (req, res) => {
    Brand.create({
      name: req.body.name,
    })
      .then(() => {
        res.json("Бренд добавлен");
      })
      .catch(() => {
        res.json({ error: "Ошибка при добавлении нового бренда" });
      });
  },
  patchBrand: (req, res) => {
    Brand.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
    })
      .then(() => {
        res.json("Бренд изменен");
      })
      .catch(() => {
        res.json({ error: "Ошибка при изменении бренда" });
      });
  },
  deleteBrand: (req, res) => {
    Brand.findByIdAndRemove(req.params.id) // req.params.id необходим, если работаем с одним документом (get, delete, patch..)
      .then(() => {
        res.json("Бренд удален");
      })
      .catch(() => {
        res.json({ error: "Ошибка при удалении бренда" });
      });
  },
};
