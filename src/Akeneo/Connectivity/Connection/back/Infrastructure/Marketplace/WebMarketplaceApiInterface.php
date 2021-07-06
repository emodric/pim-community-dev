<?php

declare(strict_types=1);

namespace Akeneo\Connectivity\Connection\Infrastructure\Marketplace;

/**
 * @copyright 2021 Akeneo SAS (http://www.akeneo.com)
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 */
interface WebMarketplaceApiInterface
{
    /**
     * @return array{
     *     total: int,
     *     offset: int,
     *     limit: int,
     *     items: array<array{
     *          id: string,
     *          name: string,
     *          logo: string,
     *          author: string,
     *          partner?: string,
     *          description: string,
     *          url: string,
     *          categories: array<string>,
     *          certified?: bool,
     *     }>
     * }
     */
    public function getExtensions(string $edition, string $version, $offset = 0, $limit = 10): array;
}