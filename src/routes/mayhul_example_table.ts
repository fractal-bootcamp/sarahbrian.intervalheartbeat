import { Action } from "@interval/sdk";
import { io } from '@interval/sdk';

export default new Action(async () => {
    await io.display.table('Example Table', {
        columns: [
          {
            label: 'Name',
            renderCell: (cell) => ({
              label: cell.name,
              onExpand: async () => {
                await io.group([
                  io.display.metadata('Metadata', {
                    data: [
                      { label: 'Email', value: cell.email },
                      { label: 'Joined On', value: cell.joinedOn },
                    ],
                    layout: 'card',
                  }),
                  io.display.object('Notification Settings', {
                    data: cell.notificationSettings,
                  }),
                ]);
              },
            }),
          },
          {
            label: 'Age',
            renderCell: (cell) => ({
              label: cell.age,
            }),
          },
        ],
        data: [
          {
            name: 'Mayhul',
            age: 24,
            email: 'mayhul@example.com',
            notificationSettings: { mobile: 'ON', desktop: 'OFF', web: 'ON' },
            joinedOn: new Date('2022-01-01'),
          },
          {
            name: 'Nick',
            age: 25,
            email: 'nick@example.com',
            notificationSettings: { mobile: 'ON', desktop: 'ON', web: 'ON' },
            joinedOn: new Date('2022-03-01'),
          },
          {
            name: 'Joseph',
            age: 30,
            email: 'joseph@example.com',
            notificationSettings: { mobile: 'ON', desktop: 'OFF', web: 'ON' },
            joinedOn: new Date('2022-02-01'),
          },
        ],
      });
});