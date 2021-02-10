import React from "react";
import { shallow } from "enzyme";
import Headline from "./index";

import { findByTestArr, checkProps } from "../../../Utils";

const setUp = (props) => {
	const component = shallow(<Headline {...props} />);
	return component;
};

describe("Headline Component", () => {
	describe("Checking PropTypes", () => {
		it("Should not throw a warning", () => {
			const expectedProps = {
				header: "Test Header",
				desc: "Test Desc",
				tempArr: [
					{
						fName: "Test fName",
						lName: "Test lName",
						email: "test@gmail.com",
						age: 23,
						onlineStatus: true,
					},
				],
			};

			const propsErr = checkProps(Headline, expectedProps);
			expect(propsErr).toBeUndefined();
		});
	});

	describe("Have Props", () => {
		let wrapper;
		beforeEach(() => {
			const props = {
				header: "Test Header",
				desc: "Test Desc",
			};
			wrapper = setUp(props);
		});

		it("Should render without errors", () => {
			const component = findByTestArr(wrapper, "HeadlineComponent");
			expect(component.length).toBe(1);
		});

		it("Should render a h1", () => {
			const h1 = findByTestArr(wrapper, "header");
			expect(h1.length).toBe(1);
		});

		it("Should render a desc", () => {
			const desc = findByTestArr(wrapper, "desc");
			expect(desc.length).toBe(1);
		});
	});

	describe("Have NO Props", () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setUp();
		});

		it("Should not render ", () => {
			const component = findByTestArr(wrapper, "HeadlineComponent");
			expect(component.length).toBe(0);
		});
	});
});
