import checkPropTypes from "check-prop-types";

// NOTE : data-test setup
export const findByTestArr = (component, attr) => {
	const wrapper = component.find(`[data-test='${attr}']`);
	return wrapper;
};

// NOTE check PropTypes
export const checkProps = (component, expectedProps) => {
	const propsErr = checkPropTypes(
		component.propTypes,
		expectedProps,
		"props",
		component.name
	);
	return propsErr;
};
