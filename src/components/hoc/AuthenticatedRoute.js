import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
import withRouter from "./withRouter";
import { addCustomer } from "../../redux/customers/customerSlice";
import { getCustomerInfo } from "../../services/auth";

const authenticatedRoute = (Component = null, options = {}) => {
  class AuthenticatedRoute extends React.Component {
    state = {
      loading: true,
    };

    async componentDidMount() {
      const { customer, addCustomer } = this.props;
      if (customer) {
        this.setState({ loading: false });
      } else if (localStorage.getItem("token")) {
        try {
          const { customer } = await getCustomerInfo();
          addCustomer(customer);
          this.setState({ loading: false });
        } catch (ex) {
          toast.error(ex.response?.data?.errors[0]);
        }
      } else {
        toast.warning("Please login first");
        window.location.href = "/login/email"; // TODO
        // this.props.navigate(options.pathAfterFailure || "/login/email", {
        //   replace: true,
        // });
      }
    }

    render() {
      const { loading } = this.state;

      if (loading) {
        return <div />;
      }

      return <Component {...this.props} />;
    }
  }

  return connect(
    (state) => ({
      customer: state.customer.customer,
    }),
    { addCustomer }
  )(withRouter(AuthenticatedRoute));
};

export default authenticatedRoute;
