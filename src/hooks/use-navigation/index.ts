import { useCallback } from 'react';
import {
	createSearchParams,
	useNavigate,
	type NavigateOptions,
	type URLSearchParamsInit,
} from 'react-router';
import type { RouteUrl } from '../../utils/enum/routes-url';

export interface PathObject {
	pathname: RouteUrl | string;
	query?: URLSearchParamsInit;
}

export const isFullHttpUrl = (url: string): URL | null => {
	try {
		return new URL(url);
	} catch {
		return null;
	}
};

export const transformPathObjectToURL = ({
	query,
	pathname,
}: PathObject): URL => {
	const url = new URL(pathname, window.origin);
	const searchParamsFromQuery = createSearchParams(query);

	searchParamsFromQuery.forEach((value, key) => {
		url.searchParams.append(key, value);
	});

	return url;
};

export const transformRouteUrlToURL = (pathname: RouteUrl): URL => {
	return new URL(pathname, window.origin);
};

export const useNavigation = () => {
	const navigate = useNavigate();

	const back = useCallback(
		(pageCount = 1) => {
			navigate(pageCount);
		},
		[navigate],
	);

	const handleNavigate = useCallback(
		(path: RouteUrl | PathObject, options?: NavigateOptions) => {
			const isPathObject = typeof path !== 'string';

			const url = isPathObject
				? transformPathObjectToURL(path)
				: transformRouteUrlToURL(path);

			navigate(
				{
					pathname: url.pathname,
					search: url.search,
				},
				options,
			);
		},
		[navigate],
	);

	const redirect = useCallback(
		(path: RouteUrl | PathObject) => {
			const isPathObject = typeof path !== 'string';
			const pathname = isPathObject ? path.pathname : path;

			if (isFullHttpUrl(pathname)) {
			} else {
				handleNavigate(path);
			}
		},
		[handleNavigate],
	);

	const replace = useCallback(
		(path: RouteUrl | PathObject) => {
			const isPathObject = typeof path !== 'string';
			const pathname = isPathObject ? path.pathname : path;

			if (isFullHttpUrl(pathname)) {
			} else {
				handleNavigate(path, { replace: true });
			}
		},
		[handleNavigate],
	);

	return {
		redirect,
		back,
		replace,
	};
};
