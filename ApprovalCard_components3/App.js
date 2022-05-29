import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import Comment from "./Comment";

const myStyle = {
    fontWeight: 'bolder',
    textAlign: 'center',
    fontSize: '35px',
    color: 'green',
    padding: '30px 0'
}

const App = (props) => {
    return (
        <div className="ui container">
            <h1 style = {myStyle}>Approval Cards</h1>
            <div className='ui cards'>
                <ApprovalCard>
                    <div className='ui comments'>
                        <Comment
                            avatar={faker.image.avatar()}
                            author={faker.name.firstName()}
                            date={faker.date.weekday()}
                            text={faker.lorem.sentence()}
                        />
                    </div>
                </ApprovalCard>
                <ApprovalCard>
                    <div className='ui comments'>
                        <Comment
                            avatar={faker.image.avatar()}
                            author={faker.name.firstName()}
                            date={faker.date.weekday()}
                            text={faker.lorem.sentence()}
                        />
                    </div>
                </ApprovalCard>
                <ApprovalCard>
                    <div className='ui comments'>
                        <Comment
                            avatar={faker.image.avatar()}
                            author={faker.name.firstName()}
                            date={faker.date.weekday()}
                            text={faker.lorem.sentence()}
                        />
                    </div>
                </ApprovalCard>
            </div>
        </div>
    );
}

export default App;