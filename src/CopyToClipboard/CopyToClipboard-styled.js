// Copyright 2019 Esri
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.​

import styled, { keyframes } from 'styled-components';
import { CalciteInput } from '../utils/commonElements';
import { transition } from '../utils/helpers';
import Button from '../Button';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledCopyToClipboard = styled.div`
  display: flex;

  svg {
    animation: ${FadeIn} ${transition()};
  }
`;

const StyledCopyToClipboardInput = styled(CalciteInput)`
  flex: 1 0 50px;
  width: auto;
  margin: 0;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const StyledCopyButton = styled(Button)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;

  svg {
    margin-left: 0 !important;
  }
`;

export { StyledCopyToClipboard, StyledCopyToClipboardInput, StyledCopyButton };
