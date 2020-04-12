export default {
  'GET /api/pet/pets': (req, res) => {
    res.status(200).send({
      code: 200,
      message: 'OK',
      data: [
        {
          petName: 'mimi',
          type: 0,
          status: 1,
        },
        {
          petName: 'wangwang',
          type: 1,
          status: 1,
        },
        {
          petName: 'miaomiao',
          type: 0,
          status: 1,
        },
      ],
    });
  },
};
