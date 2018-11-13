import { expect } from 'chai';
import { option } from 'zipkin';
import Some = option.Some;
import None = option.None;
import INone = option.INone;
import IOption = option.IOption;

describe('Option', () => {
    describe('None', () => {
        it('"map" should have correct return types', () => {
            const value = None;

            const mappedValue: INone = value.map(v => v);

            expect(mappedValue.type).to.equal('None');
        });

        it('"flatMap" should have correct return types', () => {
            const value = None;

            const mappedValue: INone = value.flatMap(v => v);

            expect(mappedValue.type).to.equal('None');
        });
    });

    describe('Some', () => {
        it('"map" should have correct return types', () => {
            const value = new Some('some value');

            const mappedValue: IOption<string> = value.map(v => v);

            expect(mappedValue.type).to.equal('Some');
        });

        it('"flatMap" should have correct return types', () => {
            const value = new Some('some value');

            const mappedValue: string = value.flatMap(v => v);

            expect(mappedValue).to.equal('some value');
        });
    });
});
