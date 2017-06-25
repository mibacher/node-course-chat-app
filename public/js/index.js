var socket = io();

      socket.on('connect', function ()  {
        console.log('Connected to server');

        socket.emit('createMessage', {
          from: 'Jen',
          text: 'hey, this is Jen'
        });
      });

      socket.on('disconnect', function ()  {
        console.log('Disconnected from server');
      });

      socket.on('newMessage', function (newMessage) {
        console.log('New message', newMessage);
      });