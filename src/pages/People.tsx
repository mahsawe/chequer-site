import * as React from 'react';
import {Container} from 'semantic-ui-react';

export class People extends React.Component<iCommonPageProps, iCommonPageState> {
  constructor(props) {
    super(props);

  }

  public render() {

    return (
      <div data-page-content="people">
        <Container>
          <h1>PEOPLE</h1>

          <p>
            사람이 가장중요한 회사.
          </p>

        </Container>
      </div>
    )
  }
}