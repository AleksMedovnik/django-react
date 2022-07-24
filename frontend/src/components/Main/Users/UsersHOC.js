import { connect } from "react-redux";
import { getUsers } from "../../../store/reducers/usersReducer";
import Users from './Users'

const mapStateToProps = state => {
    return {
        users: state.users.users,
    }
};

export default connect(mapStateToProps, { getUsers })(Users);