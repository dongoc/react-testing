import React from "react";
import { shallow } from "enzyme";
import { findByTestArr } from "./../../../Utils";
import Header from "./index";

// NOTE : component setup
const setUp = (props = {}) => {
	const component = shallow(<Header {...props} />);
	return component;
};

describe("Header Component", () => {
	let component;
	beforeEach(() => {
		component = setUp();
	});

	it("Should render without errors", () => {
		// NOTE : debug
		// console.log(component.debug());

		// NOTE : find by className
		// const wrapper = component.find(".headerComponent");

		// NOTE : find by data-test
		// const wrapper = component.find(`[data-test="headerComponent"]`);
		const wrapper = findByTestArr(component, "headerComponent");

		expect(wrapper.length).toBe(1);
	});

	it("Should render a logo", () => {
		// const logo = component.find(`[data-test="logoIMG"]`);
		const logo = findByTestArr(component, "logoIMG");
		expect(logo.length).toBe(1);
	});
});
