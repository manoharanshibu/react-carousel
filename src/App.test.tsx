import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { configure, shallow } from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
const adapter = ReactSixteenAdapter as any;
configure({ adapter: new adapter.default() });
import {PhotosList} from './modules/PhotosList/PhotosList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the title', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-title').text()).toBe('Carousel Test');
});

it('renders the Photo List component', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(PhotosList).length).toEqual(1);
});
