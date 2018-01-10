// @flow

import React, { Component } from 'react';
import { RIESelect, RIEInput, RIENumber } from 'riek';
import type { Code as CodeType } from '../../types/Code';

type Props = {
  code: CodeType,
  onChange: any
}

export class Code extends Component<Props> {

  render() {
    let code = this.props.code;
    let codeTypeOptions = ["SNOMED-CT", "RxNorm", "LOINC"].map((c) => {return {id: c, text: c}});
    return (
      <label> Code:
      <RIESelect value={{id: code.system, text: code.system}} propName="system" change={this.props.onChange('system')} options={codeTypeOptions} />
      <RIEInput value={code.display} propName="display" change={this.props.onChange('display')} />
      (<RIEInput value={code.code} propName="code" change={this.props.onChange('code')} />)
      </label>
    );
  }

}

type CodesProps = {
  codes: CodeType[],
  onChange: any
}
export class Codes extends Component<CodesProps> {
  render() {

    return (
      <div>
        {this.props.codes.map((code, i) => {
          return <Code key={i} onChange={this.props.onChange(i)} code={code} />
        })}
      </div>
    );
  }
}
