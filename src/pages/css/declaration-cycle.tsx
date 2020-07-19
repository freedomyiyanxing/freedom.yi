import React from 'react';

interface IProps {
  age: number;
}

interface IState {
  name: string
}

class DeclarationCycle extends React.Component<IProps, IState> {
  constructor(props: Readonly<IProps>) {
    super(props);

    this.state = {
      name: 'freedom',
    };
  }

  static getDerivedStateFromProps(nextProps: Readonly<IProps>, prevState: Readonly<IState>): void {
    console.log(nextProps, prevState, '挂载阶段  -> getDerivedStateFromProps');
  }

  componentDidMount(): void {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(
    nextProps: Readonly<IProps>, nextState: Readonly<IState>, nextContext: any,
  ): boolean {
    console.log(nextProps, nextState, '更新前  -> shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps: Readonly<IProps>, prevState: Readonly<IState>): any | null {
    console.log(prevProps, prevState, '更新后  -> getSnapshotBeforeUpdate');
    return 'aa';
  }

  componentDidUpdate(
    prevProps: Readonly<IProps>, prevState: Readonly<IState>, snapshot?: any,
  ): void {
    console.log(prevProps, prevState, snapshot, '更新后  -> componentDidUpdate');
  }

  componentWillUnmount(): void {
    console.log('componentWillUnmount -> 组件卸载了');
  }

  handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value,
    });
  };

  render(): React.ReactElement {
    console.log('render  -> 返回内容');
    const { name } = this.state;
    return (
      <div>
        <label htmlFor="name">
          Name
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            style={{ height: 36, border: '1px solid red' }}
            onChange={this.handleNameChange}
          />
        </label>
      </div>
    );
  }
}

export default DeclarationCycle;
