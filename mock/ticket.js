export default {
    'GET /api/ticket/tickets': (req, res) => {
      res.status(200).send({
        code: 200,
        message: 'OK',
        data: [
          {
            //ticketid: '001',
            'userID':'0001',
            'petID':'032',
            'apptType':'standard',
            'status':'SurgeryDateConfirmed',
            'startTime':'2019-09-27',
            'finishTime':'2019-10-10',
            'priority':'4',
          },
          {
            //ticketid: '002',
            'userID':'0007',
            'petID':'098',
            'apptType':'emergency',
            'status':'Surgery Completed',
            'startTime':'2019-12-12',
            'finishTime':'2019-12-20',
            'priority':'3',
          },
          {
            //ticketID: '003',
            'userID':'0023',
            'petID':'015',
            'apptType':'standard',
            'status':'Surgery Completed',
            'startTime':'2020-02-16',
            'finishTime':'2019-2-27',
            'priority':'5',
          },
        ],
      });
    },
  };



// import Mock from 'mock.js';
// const Random = Mock.Random;
// const domain = 'http://mockjs.com';
// const code = 200;

// const data1={
//     'userID':'0001',
//     'petID':'032',
//     'apptType':'standard',
//     'status':'SurgeryDateConfirmed',
//     'startTime':'2019-09-27',
//     'finishTime':'2019-10-10',
//     'priority':'4',
// }


// var dataList=[];

// for(let i=0;i<6;i++){
//     dataList.push(data1);
// }

// Mock.setup({
//     timeout:3000
// })

// Mock.mock(domain,'get',dataList);
