import checkPropTypes from 'check-prop-types';

/**
 * Return ShallowWrapper containing nodes(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {String} val - value of data-test attribute for search.
 * @return {ShallowWrapper}
 */
export const findByTestAttr = (wrapper,val) => {
    return wrapper.find(`[data-test="${val}"]`)

};

export const checkProps = (component, confirmingProps) => {
    const propError = checkPropTypes(component.propTypes, confirmingProps, 'prop', component.name);
    expect(propError).toBeUndefined();
};