import ReactSelector from 'testcafe-react-selectors';

fixture `Main page`

const getMembers = () => {
    return ReactSelector('Member');
};

const getMember = (name) => {
    return getMembers().withText(name);
};

test('Find member simple test', async (t) => {
    await t.wait(10000);
    const memberSelector = getMember('test');
    await t.expect(memberSelector.count).eql(1);
});