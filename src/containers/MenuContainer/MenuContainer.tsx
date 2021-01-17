import { connect } from 'react-redux';
import { State, StateSections } from '../../state';
import Menu, { MenuStateProps } from '../../components/Menu/Menu';

const mapStateToProps = (state: State): MenuStateProps => ({
    items: state[StateSections.CONTENT].navigation,
});

export const MenuContainer = connect(mapStateToProps)(Menu);

export default MenuContainer;
