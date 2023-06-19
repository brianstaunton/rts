import { Component } from 'react';

interface User {
    name: string;
    age: number;
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}

interface UserSearchProps {
    users: User[]
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  };

  onClick = () => {
        const foundUser = this.props.users.find((user) => {
            return user.name === this.state.name;
        });

   }

  render() {
    const { name, user } = this.state;
    return(<div>
        User Search 
        <input value={this.state.name} 
        onChange={ (e) => this.setState({ name: e.target.value})} />
        <button onClick={this.onClick}>Find User</button>
        <div>
            { user && user.name }
            { user && user.age }
        </div>
    
      </div>) 
  };

}

export default UserSearch;