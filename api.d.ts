import type { QueryKey, UseMutationOptions, UseMutationResult, UseQueryOptions, UseQueryResult } from '@tanstack/react-query';
import type { AuthUser, Conversation, ConversationInput, ErrorResponse, GetMessagesParams, HealthStatus, ListUsersParams, LoginInput, Message, MessageInput, MessageSearchResult, MessageUpdate, OkResponse, ReactionInput, RegisterInput, SearchMessagesParams, TypingInput, TypingUser, User, UserUpdate } from './api.schemas';
import { customFetch } from '../custom-fetch';
import type { ErrorType, BodyType } from '../custom-fetch';
type AwaitedInput<T> = PromiseLike<T> | T;
type Awaited<O> = O extends AwaitedInput<infer T> ? T : never;
type SecondParameter<T extends (...args: never) => unknown> = Parameters<T>[1];
export declare const getHealthCheckUrl: () => string;
/**
 * @summary Health check
 */
export declare const healthCheck: (options?: RequestInit) => Promise<HealthStatus>;
export declare const getHealthCheckQueryKey: () => readonly ["/api/healthz"];
export declare const getHealthCheckQueryOptions: <TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData> & {
    queryKey: QueryKey;
};
export type HealthCheckQueryResult = NonNullable<Awaited<ReturnType<typeof healthCheck>>>;
export type HealthCheckQueryError = ErrorType<unknown>;
/**
 * @summary Health check
 */
export declare function useHealthCheck<TData = Awaited<ReturnType<typeof healthCheck>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof healthCheck>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getRegisterUrl: () => string;
/**
 * @summary Register a new account
 */
export declare const register: (registerInput: RegisterInput, options?: RequestInit) => Promise<AuthUser>;
export declare const getRegisterMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
        data: BodyType<RegisterInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
    data: BodyType<RegisterInput>;
}, TContext>;
export type RegisterMutationResult = NonNullable<Awaited<ReturnType<typeof register>>>;
export type RegisterMutationBody = BodyType<RegisterInput>;
export type RegisterMutationError = ErrorType<ErrorResponse>;
/**
* @summary Register a new account
*/
export declare const useRegister: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof register>>, TError, {
        data: BodyType<RegisterInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof register>>, TError, {
    data: BodyType<RegisterInput>;
}, TContext>;
export declare const getLoginUrl: () => string;
/**
 * @summary Log in
 */
export declare const login: (loginInput: LoginInput, options?: RequestInit) => Promise<AuthUser>;
export declare const getLoginMutationOptions: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginInput>;
}, TContext>;
export type LoginMutationResult = NonNullable<Awaited<ReturnType<typeof login>>>;
export type LoginMutationBody = BodyType<LoginInput>;
export type LoginMutationError = ErrorType<ErrorResponse>;
/**
* @summary Log in
*/
export declare const useLogin: <TError = ErrorType<ErrorResponse>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof login>>, TError, {
        data: BodyType<LoginInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof login>>, TError, {
    data: BodyType<LoginInput>;
}, TContext>;
export declare const getLogoutUrl: () => string;
/**
 * @summary Log out
 */
export declare const logout: (options?: RequestInit) => Promise<OkResponse>;
export declare const getLogoutMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export type LogoutMutationResult = NonNullable<Awaited<ReturnType<typeof logout>>>;
export type LogoutMutationError = ErrorType<unknown>;
/**
* @summary Log out
*/
export declare const useLogout: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof logout>>, TError, void, TContext>;
export declare const getGetMeUrl: () => string;
/**
 * @summary Get current user
 */
export declare const getMe: (options?: RequestInit) => Promise<AuthUser>;
export declare const getGetMeQueryKey: () => readonly ["/api/auth/me"];
export declare const getGetMeQueryOptions: <TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMeQueryResult = NonNullable<Awaited<ReturnType<typeof getMe>>>;
export type GetMeQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get current user
 */
export declare function useGetMe<TData = Awaited<ReturnType<typeof getMe>>, TError = ErrorType<ErrorResponse>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMe>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListUsersUrl: (params?: ListUsersParams) => string;
/**
 * @summary List or search users
 */
export declare const listUsers: (params?: ListUsersParams, options?: RequestInit) => Promise<User[]>;
export declare const getListUsersQueryKey: (params?: ListUsersParams) => readonly ["/api/users", ...ListUsersParams[]];
export declare const getListUsersQueryOptions: <TData = Awaited<ReturnType<typeof listUsers>>, TError = ErrorType<unknown>>(params?: ListUsersParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListUsersQueryResult = NonNullable<Awaited<ReturnType<typeof listUsers>>>;
export type ListUsersQueryError = ErrorType<unknown>;
/**
 * @summary List or search users
 */
export declare function useListUsers<TData = Awaited<ReturnType<typeof listUsers>>, TError = ErrorType<unknown>>(params?: ListUsersParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listUsers>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getUpdateMeUrl: () => string;
/**
 * @summary Update current user profile
 */
export declare const updateMe: (userUpdate: UserUpdate, options?: RequestInit) => Promise<User>;
export declare const getUpdateMeMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateMe>>, TError, {
        data: BodyType<UserUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof updateMe>>, TError, {
    data: BodyType<UserUpdate>;
}, TContext>;
export type UpdateMeMutationResult = NonNullable<Awaited<ReturnType<typeof updateMe>>>;
export type UpdateMeMutationBody = BodyType<UserUpdate>;
export type UpdateMeMutationError = ErrorType<unknown>;
/**
* @summary Update current user profile
*/
export declare const useUpdateMe: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof updateMe>>, TError, {
        data: BodyType<UserUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof updateMe>>, TError, {
    data: BodyType<UserUpdate>;
}, TContext>;
export declare const getHeartbeatUrl: () => string;
/**
 * @summary Mark current user as online
 */
export declare const heartbeat: (options?: RequestInit) => Promise<OkResponse>;
export declare const getHeartbeatMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof heartbeat>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof heartbeat>>, TError, void, TContext>;
export type HeartbeatMutationResult = NonNullable<Awaited<ReturnType<typeof heartbeat>>>;
export type HeartbeatMutationError = ErrorType<unknown>;
/**
* @summary Mark current user as online
*/
export declare const useHeartbeat: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof heartbeat>>, TError, void, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof heartbeat>>, TError, void, TContext>;
export declare const getGetUserUrl: (userId: number) => string;
/**
 * @summary Get a user by ID
 */
export declare const getUser: (userId: number, options?: RequestInit) => Promise<User>;
export declare const getGetUserQueryKey: (userId: number) => readonly [`/api/users/${number}`];
export declare const getGetUserQueryOptions: <TData = Awaited<ReturnType<typeof getUser>>, TError = ErrorType<ErrorResponse>>(userId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetUserQueryResult = NonNullable<Awaited<ReturnType<typeof getUser>>>;
export type GetUserQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a user by ID
 */
export declare function useGetUser<TData = Awaited<ReturnType<typeof getUser>>, TError = ErrorType<ErrorResponse>>(userId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getUser>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getListConversationsUrl: () => string;
/**
 * @summary List conversations for the current user
 */
export declare const listConversations: (options?: RequestInit) => Promise<Conversation[]>;
export declare const getListConversationsQueryKey: () => readonly ["/api/conversations"];
export declare const getListConversationsQueryOptions: <TData = Awaited<ReturnType<typeof listConversations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listConversations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof listConversations>>, TError, TData> & {
    queryKey: QueryKey;
};
export type ListConversationsQueryResult = NonNullable<Awaited<ReturnType<typeof listConversations>>>;
export type ListConversationsQueryError = ErrorType<unknown>;
/**
 * @summary List conversations for the current user
 */
export declare function useListConversations<TData = Awaited<ReturnType<typeof listConversations>>, TError = ErrorType<unknown>>(options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof listConversations>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getCreateConversationUrl: () => string;
/**
 * @summary Create or get a conversation with another user
 */
export declare const createConversation: (conversationInput: ConversationInput, options?: RequestInit) => Promise<Conversation>;
export declare const getCreateConversationMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createConversation>>, TError, {
        data: BodyType<ConversationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof createConversation>>, TError, {
    data: BodyType<ConversationInput>;
}, TContext>;
export type CreateConversationMutationResult = NonNullable<Awaited<ReturnType<typeof createConversation>>>;
export type CreateConversationMutationBody = BodyType<ConversationInput>;
export type CreateConversationMutationError = ErrorType<unknown>;
/**
* @summary Create or get a conversation with another user
*/
export declare const useCreateConversation: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof createConversation>>, TError, {
        data: BodyType<ConversationInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof createConversation>>, TError, {
    data: BodyType<ConversationInput>;
}, TContext>;
export declare const getGetConversationUrl: (conversationId: number) => string;
/**
 * @summary Get a single conversation
 */
export declare const getConversation: (conversationId: number, options?: RequestInit) => Promise<Conversation>;
export declare const getGetConversationQueryKey: (conversationId: number) => readonly [`/api/conversations/${number}`];
export declare const getGetConversationQueryOptions: <TData = Awaited<ReturnType<typeof getConversation>>, TError = ErrorType<ErrorResponse>>(conversationId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConversation>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getConversation>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetConversationQueryResult = NonNullable<Awaited<ReturnType<typeof getConversation>>>;
export type GetConversationQueryError = ErrorType<ErrorResponse>;
/**
 * @summary Get a single conversation
 */
export declare function useGetConversation<TData = Awaited<ReturnType<typeof getConversation>>, TError = ErrorType<ErrorResponse>>(conversationId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getConversation>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getMarkReadUrl: (conversationId: number) => string;
/**
 * @summary Mark all messages in a conversation as read
 */
export declare const markRead: (conversationId: number, options?: RequestInit) => Promise<OkResponse>;
export declare const getMarkReadMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markRead>>, TError, {
        conversationId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof markRead>>, TError, {
    conversationId: number;
}, TContext>;
export type MarkReadMutationResult = NonNullable<Awaited<ReturnType<typeof markRead>>>;
export type MarkReadMutationError = ErrorType<unknown>;
/**
* @summary Mark all messages in a conversation as read
*/
export declare const useMarkRead: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof markRead>>, TError, {
        conversationId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof markRead>>, TError, {
    conversationId: number;
}, TContext>;
export declare const getSetTypingUrl: (conversationId: number) => string;
/**
 * @summary Set typing indicator
 */
export declare const setTyping: (conversationId: number, typingInput: TypingInput, options?: RequestInit) => Promise<OkResponse>;
export declare const getSetTypingMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setTyping>>, TError, {
        conversationId: number;
        data: BodyType<TypingInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof setTyping>>, TError, {
    conversationId: number;
    data: BodyType<TypingInput>;
}, TContext>;
export type SetTypingMutationResult = NonNullable<Awaited<ReturnType<typeof setTyping>>>;
export type SetTypingMutationBody = BodyType<TypingInput>;
export type SetTypingMutationError = ErrorType<unknown>;
/**
* @summary Set typing indicator
*/
export declare const useSetTyping: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof setTyping>>, TError, {
        conversationId: number;
        data: BodyType<TypingInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof setTyping>>, TError, {
    conversationId: number;
    data: BodyType<TypingInput>;
}, TContext>;
export declare const getGetTypingStatusUrl: (conversationId: number) => string;
/**
 * @summary Get who is currently typing in a conversation
 */
export declare const getTypingStatus: (conversationId: number, options?: RequestInit) => Promise<TypingUser[]>;
export declare const getGetTypingStatusQueryKey: (conversationId: number) => readonly [`/api/conversations/${number}/typing-status`];
export declare const getGetTypingStatusQueryOptions: <TData = Awaited<ReturnType<typeof getTypingStatus>>, TError = ErrorType<unknown>>(conversationId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTypingStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getTypingStatus>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetTypingStatusQueryResult = NonNullable<Awaited<ReturnType<typeof getTypingStatus>>>;
export type GetTypingStatusQueryError = ErrorType<unknown>;
/**
 * @summary Get who is currently typing in a conversation
 */
export declare function useGetTypingStatus<TData = Awaited<ReturnType<typeof getTypingStatus>>, TError = ErrorType<unknown>>(conversationId: number, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getTypingStatus>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getGetMessagesUrl: (conversationId: number, params?: GetMessagesParams) => string;
/**
 * @summary List messages in a conversation
 */
export declare const getMessages: (conversationId: number, params?: GetMessagesParams, options?: RequestInit) => Promise<Message[]>;
export declare const getGetMessagesQueryKey: (conversationId: number, params?: GetMessagesParams) => readonly [`/api/conversations/${number}/messages`, ...GetMessagesParams[]];
export declare const getGetMessagesQueryOptions: <TData = Awaited<ReturnType<typeof getMessages>>, TError = ErrorType<unknown>>(conversationId: number, params?: GetMessagesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof getMessages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type GetMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof getMessages>>>;
export type GetMessagesQueryError = ErrorType<unknown>;
/**
 * @summary List messages in a conversation
 */
export declare function useGetMessages<TData = Awaited<ReturnType<typeof getMessages>>, TError = ErrorType<unknown>>(conversationId: number, params?: GetMessagesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof getMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export declare const getSendMessageUrl: (conversationId: number) => string;
/**
 * @summary Send a message
 */
export declare const sendMessage: (conversationId: number, messageInput: MessageInput, options?: RequestInit) => Promise<Message>;
export declare const getSendMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
        conversationId: number;
        data: BodyType<MessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
    conversationId: number;
    data: BodyType<MessageInput>;
}, TContext>;
export type SendMessageMutationResult = NonNullable<Awaited<ReturnType<typeof sendMessage>>>;
export type SendMessageMutationBody = BodyType<MessageInput>;
export type SendMessageMutationError = ErrorType<unknown>;
/**
* @summary Send a message
*/
export declare const useSendMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof sendMessage>>, TError, {
        conversationId: number;
        data: BodyType<MessageInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof sendMessage>>, TError, {
    conversationId: number;
    data: BodyType<MessageInput>;
}, TContext>;
export declare const getEditMessageUrl: (conversationId: number, messageId: number) => string;
/**
 * @summary Edit a message
 */
export declare const editMessage: (conversationId: number, messageId: number, messageUpdate: MessageUpdate, options?: RequestInit) => Promise<Message>;
export declare const getEditMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof editMessage>>, TError, {
        conversationId: number;
        messageId: number;
        data: BodyType<MessageUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof editMessage>>, TError, {
    conversationId: number;
    messageId: number;
    data: BodyType<MessageUpdate>;
}, TContext>;
export type EditMessageMutationResult = NonNullable<Awaited<ReturnType<typeof editMessage>>>;
export type EditMessageMutationBody = BodyType<MessageUpdate>;
export type EditMessageMutationError = ErrorType<unknown>;
/**
* @summary Edit a message
*/
export declare const useEditMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof editMessage>>, TError, {
        conversationId: number;
        messageId: number;
        data: BodyType<MessageUpdate>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof editMessage>>, TError, {
    conversationId: number;
    messageId: number;
    data: BodyType<MessageUpdate>;
}, TContext>;
export declare const getDeleteMessageUrl: (conversationId: number, messageId: number) => string;
/**
 * @summary Delete a message
 */
export declare const deleteMessage: (conversationId: number, messageId: number, options?: RequestInit) => Promise<OkResponse>;
export declare const getDeleteMessageMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteMessage>>, TError, {
        conversationId: number;
        messageId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof deleteMessage>>, TError, {
    conversationId: number;
    messageId: number;
}, TContext>;
export type DeleteMessageMutationResult = NonNullable<Awaited<ReturnType<typeof deleteMessage>>>;
export type DeleteMessageMutationError = ErrorType<unknown>;
/**
* @summary Delete a message
*/
export declare const useDeleteMessage: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof deleteMessage>>, TError, {
        conversationId: number;
        messageId: number;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof deleteMessage>>, TError, {
    conversationId: number;
    messageId: number;
}, TContext>;
export declare const getAddReactionUrl: (conversationId: number, messageId: number) => string;
/**
 * @summary Add an emoji reaction to a message
 */
export declare const addReaction: (conversationId: number, messageId: number, reactionInput: ReactionInput, options?: RequestInit) => Promise<Message>;
export declare const getAddReactionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof addReaction>>, TError, {
        conversationId: number;
        messageId: number;
        data: BodyType<ReactionInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof addReaction>>, TError, {
    conversationId: number;
    messageId: number;
    data: BodyType<ReactionInput>;
}, TContext>;
export type AddReactionMutationResult = NonNullable<Awaited<ReturnType<typeof addReaction>>>;
export type AddReactionMutationBody = BodyType<ReactionInput>;
export type AddReactionMutationError = ErrorType<unknown>;
/**
* @summary Add an emoji reaction to a message
*/
export declare const useAddReaction: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof addReaction>>, TError, {
        conversationId: number;
        messageId: number;
        data: BodyType<ReactionInput>;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof addReaction>>, TError, {
    conversationId: number;
    messageId: number;
    data: BodyType<ReactionInput>;
}, TContext>;
export declare const getRemoveReactionUrl: (conversationId: number, messageId: number, emoji: string) => string;
/**
 * @summary Remove an emoji reaction from a message
 */
export declare const removeReaction: (conversationId: number, messageId: number, emoji: string, options?: RequestInit) => Promise<Message>;
export declare const getRemoveReactionMutationOptions: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof removeReaction>>, TError, {
        conversationId: number;
        messageId: number;
        emoji: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationOptions<Awaited<ReturnType<typeof removeReaction>>, TError, {
    conversationId: number;
    messageId: number;
    emoji: string;
}, TContext>;
export type RemoveReactionMutationResult = NonNullable<Awaited<ReturnType<typeof removeReaction>>>;
export type RemoveReactionMutationError = ErrorType<unknown>;
/**
* @summary Remove an emoji reaction from a message
*/
export declare const useRemoveReaction: <TError = ErrorType<unknown>, TContext = unknown>(options?: {
    mutation?: UseMutationOptions<Awaited<ReturnType<typeof removeReaction>>, TError, {
        conversationId: number;
        messageId: number;
        emoji: string;
    }, TContext>;
    request?: SecondParameter<typeof customFetch>;
}) => UseMutationResult<Awaited<ReturnType<typeof removeReaction>>, TError, {
    conversationId: number;
    messageId: number;
    emoji: string;
}, TContext>;
export declare const getSearchMessagesUrl: (params: SearchMessagesParams) => string;
/**
 * @summary Search messages across all conversations
 */
export declare const searchMessages: (params: SearchMessagesParams, options?: RequestInit) => Promise<MessageSearchResult[]>;
export declare const getSearchMessagesQueryKey: (params?: SearchMessagesParams) => readonly ["/api/messages/search", ...SearchMessagesParams[]];
export declare const getSearchMessagesQueryOptions: <TData = Awaited<ReturnType<typeof searchMessages>>, TError = ErrorType<unknown>>(params: SearchMessagesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof searchMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}) => UseQueryOptions<Awaited<ReturnType<typeof searchMessages>>, TError, TData> & {
    queryKey: QueryKey;
};
export type SearchMessagesQueryResult = NonNullable<Awaited<ReturnType<typeof searchMessages>>>;
export type SearchMessagesQueryError = ErrorType<unknown>;
/**
 * @summary Search messages across all conversations
 */
export declare function useSearchMessages<TData = Awaited<ReturnType<typeof searchMessages>>, TError = ErrorType<unknown>>(params: SearchMessagesParams, options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof searchMessages>>, TError, TData>;
    request?: SecondParameter<typeof customFetch>;
}): UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
};
export {};
//# sourceMappingURL=api.d.ts.map