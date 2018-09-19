import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from 'styled-components';

import GuideExample from '../../../stories/GuideExample';
import doc from './Card.md';
import cardImage from '../../../stories/images/bridge3.jpg';
import cardImageCircle from '../../../stories/images/bridge-circle.png';

import Card, { CardTitle, CardContent, CardImage } from '../';
import Button from '../../Button';

const CustomStyledCard = styled(Card)`
  max-width: 320px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 30px,
    rgba(0, 0, 0, 0.23) 0px 6px 10px;
`;

storiesOf('Card', module).add(
  'Basic',
  withInfo(doc)(() => (
    <div>
      <GuideExample>
        <Card style={{ maxWidth: '320px' }}>
          <CardImage
            src={cardImage}
            caption="Florida, January 1954"
            alt="Bridge Club, 1954"
          />
          <CardContent>
            <CardTitle>Card with Image</CardTitle>
            <p>Cards can have full-bleed images with optional captions.</p>
            <Button>View Examples</Button>
          </CardContent>
        </Card>
      </GuideExample>

      <GuideExample label="shaped">
        <Card shaped style={{ maxWidth: '320px' }}>
          <CardImage src={cardImageCircle} alt="Bridge Club, 1942" />
          <CardContent>
            <p>
              Another class <code>shaped</code> allows for a stylized version of
              the card meant to work with geometrically-shaped images.
            </p>
            <Button clear>View Examples</Button>
          </CardContent>
        </Card>
      </GuideExample>

      <GuideExample
        label="bar"
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Card bar="blue" style={{ margin: '0 5px', flex: '1 1 20%' }}>
          <CardContent>
            <CardTitle>Card with Colored Bar</CardTitle>
            <p>
              Every color in calcite can be used as a colored "bar" along the
              top of a card to provide a bit of visual punch with{' '}
              <code>
                bar="
                {'{color}'}"
              </code>
            </p>
            <Button clear>What Colors?</Button>
          </CardContent>
        </Card>
        <Card bar="green" style={{ margin: '0 5px', flex: '1 1 20%' }}>
          <CardContent>
            <CardTitle>Card with Colored Bar</CardTitle>
            <p>
              Every color in calcite can be used as a colored "bar" along the
              top of a card to provide a bit of visual punch with{' '}
              <code>
                bar="
                {'{color}'}"
              </code>
            </p>
            <Button clear>What Colors?</Button>
          </CardContent>
        </Card>
        <Card bar="yellow" style={{ margin: '0 5px', flex: '1 1 20%' }}>
          <CardContent>
            <CardTitle>Card with Colored Bar</CardTitle>
            <p>
              Every color in calcite can be used as a colored "bar" along the
              top of a card to provide a bit of visual punch with{' '}
              <code>
                bar="
                {'{color}'}"
              </code>
            </p>
            <Button clear>What Colors?</Button>
          </CardContent>
        </Card>
        <Card bar="red" style={{ margin: '0 5px', flex: '1 1 20%' }}>
          <CardContent>
            <CardTitle>Card with Colored Bar</CardTitle>
            <p>
              Every color in calcite can be used as a colored "bar" along the
              top of a card to provide a bit of visual punch with{' '}
              <code>
                bar="
                {'{color}'}"
              </code>
            </p>
            <Button clear>What Colors?</Button>
          </CardContent>
        </Card>
      </GuideExample>

      <GuideExample label="wide">
        <Card wide>
          <CardImage
            wide
            src={cardImage}
            caption="Florida, January 1954"
            alt="Bridge Club, 1954"
          />
          <CardContent wide>
            <CardTitle>Wide Cards</CardTitle>
            <p>
              Wide cards are just like standard cards except that they are
              displayed in landscape orientation. This is useful in situations
              where there is too much content to display well in a standard
              card.
            </p>
            <p>
              Generally wide cards are meant to be displayed one-up, not
              grouped.
            </p>
          </CardContent>
        </Card>
      </GuideExample>

      <GuideExample label="styled(Card)">
        <CustomStyledCard>
          <CardImage
            src={cardImage}
            caption="Florida, January 1954"
            alt="Bridge Club, 1954"
          />
          <CardContent>
            <CardTitle>Card with a Custom Component</CardTitle>
            <p>
              Components can be styled using the <code>styled(Card)</code>{' '}
              syntax provided by styled-components. The new component will
              inherit the functionality of the component and add your new styles
              on top of the default styles.
            </p>
            <Button>View Examples</Button>
          </CardContent>
        </CustomStyledCard>
      </GuideExample>
    </div>
  ))
);
