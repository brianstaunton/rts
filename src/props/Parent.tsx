import { ChildAsFC } from './Child';

const Parent = () => {

  return <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
    Some text
    </ChildAsFC>;

}

export default Parent;