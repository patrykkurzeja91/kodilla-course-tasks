import PlayersList from './PlayersList';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Player from '../Player/Player';

it('renders without crashing', () => {
  shallow(<PlayersList players={[]} />);
});

it('renders players list', () => {
  const players = [
      {
        name: 'Kunegunda',
        score: 5
      },
      {
        name: 'Antoś',
        score: 0
      }
    ],
    playerComponent = shallow(<PlayersList players={players} />),
    expectedPlayersNumber = playerComponent.find(Player).length;
  expect(expectedPlayersNumber).toEqual(2);
});

it('on score update', () => {
  const players = [
      {
        name: 'Kunegunda',
        score: 5
      },
      {
        name: 'Antoś',
        score: 0
      }
    ],
    mockedOnScoreUpdate = jest.fn(),
    playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />),
    firstPlayer = playerComponent.find(Player).at(1),
    onPlayerScoreChange = firstPlayer.prop('onPlayerScoreChange');
    onPlayerScoreChange(5);

    expect(mockedOnScoreUpdate).toBeCalledWith(1, 5);
});
