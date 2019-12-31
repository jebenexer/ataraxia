import { ServiceListRequestMessage } from './ServiceListRequestMessage';
import { ServiceListReplyMessage } from './ServiceListReplyMessage';
import { ServiceInvokeRequest } from './ServiceInvokeRequest';
import { ServiceInvokeReply } from './ServiceInvokeReply';
import { ServiceAvailableMessage } from './ServiceAvailableMessage';
import { ServiceUnavailableMessage } from './ServiceUnavailableMessage';

/**
 * Types of messages used by Services.
 */
export interface ServiceMessages {
	'service:list-request': ServiceListRequestMessage;
	'service:list-reply': ServiceListReplyMessage;

	'service:invoke-request': ServiceInvokeRequest;
	'service:invoke-reply': ServiceInvokeReply;

	'service:available': ServiceAvailableMessage;
	'service:unavailable': ServiceUnavailableMessage;
}
