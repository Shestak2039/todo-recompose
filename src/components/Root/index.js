import { connect } from 'react-redux';

import Root from './Root';

const mapStateToProps = ({ modalState: { modal }}) => ({ modal })

export default connect(mapStateToProps)(Root);