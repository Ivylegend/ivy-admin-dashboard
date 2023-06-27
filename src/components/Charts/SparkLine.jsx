import React from "react";
import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

class SparkLine extends React.PureComponent {
  render() {
    const { id, height, width, color, data, type, currentColor } = this.props;

    return (
      <SparklineComponent
        id={id}
        height={height}
        fill={color}
        width={width}
        lineWidth={1}
        valueType="Numeric"
        border={{ color: currentColor, width: 2 }}
        dataSource={data}
        xName="x"
        yName="y"
        type={type}
        tooltipSettings={{
          visible: true,
          format: "${x} : data ${y}",
          TrackLineSettings: {
            visible: true,
          },
        }}
      >
        <Inject services={[SparklineTooltip]} />
      </SparklineComponent>
    );
  }
}

export default SparkLine;
