import React from 'react';

interface ConditionalRendererProps {
  children: React.ReactNode;
  condition?: boolean;
}

function ConditionalRenderer({ condition, children }: ConditionalRendererProps) {
  return condition ? children : null;
}

export default ConditionalRenderer;
