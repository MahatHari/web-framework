import { User } from './models/User';

const user = new User({ name: 'Besties', age: 679 });

user.events.on('change', () => console.log('Change !!!'));
user.events.trigger('change');
