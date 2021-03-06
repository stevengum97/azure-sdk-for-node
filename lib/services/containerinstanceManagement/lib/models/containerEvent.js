/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * A container instance event.
 *
 */
class ContainerEvent {
  /**
   * Create a ContainerEvent.
   * @member {number} [count] The count of the event.
   * @member {date} [firstTimestamp] The date-time of the earliest logged
   * event.
   * @member {date} [lastTimestamp] The date-time of the latest logged event.
   * @member {string} [message] The event message.
   * @member {string} [type] The event type.
   */
  constructor() {
  }

  /**
   * Defines the metadata of ContainerEvent
   *
   * @returns {object} metadata of ContainerEvent
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ContainerEvent',
      type: {
        name: 'Composite',
        className: 'ContainerEvent',
        modelProperties: {
          count: {
            required: false,
            serializedName: 'count',
            type: {
              name: 'Number'
            }
          },
          firstTimestamp: {
            required: false,
            serializedName: 'firstTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          lastTimestamp: {
            required: false,
            serializedName: 'lastTimestamp',
            type: {
              name: 'DateTime'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ContainerEvent;
