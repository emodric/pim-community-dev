define(["pim/datagrid-view-fetcher","pim/base-fetcher","pim/attribute-group-fetcher","pim/attribute-fetcher","pim/locale-fetcher","pim/variant-group-fetcher","pim/product-fetcher"], function (PimDatagridViewFetcher,PimBaseFetcher,PimAttributeGroupFetcher,PimAttributeFetcher,PimLocaleFetcher,PimVariantGroupFetcher,PimProductFetcher) { return { "datagrid-view": {   "module": "pim/datagrid-view-fetcher",    "options": {"urls":{"list":"pim_datagrid_view_rest_index","get":"pim_datagrid_view_rest_get","columns":"pim_datagrid_view_rest_default_columns","userDefaultView":"pim_datagrid_view_rest_default_user_view"}},    "resolvedModule": PimDatagridViewFetcher,   }, "default": {   "module": "pim/base-fetcher",   }, "association-type": {   "module": "pim/base-fetcher",    "options": {"urls":{"list":"pim_enrich_associationtype_rest_index","get":"pim_enrich_associationtype_rest_get"}},    "resolvedModule": PimBaseFetcher,   }, "group-type": {   "module": "pim/base-fetcher",    "options": {"urls":{"list":"pim_enrich_grouptype_rest_index","get":"pim_enrich_grouptype_rest_get"}},    "resolvedModule": PimBaseFetcher,   }, "attribute-group": {   "module": "pim/attribute-group-fetcher",    "options": {"urls":{"list":"pim_enrich_attributegroup_rest_index"}},    "resolvedModule": PimAttributeGroupFetcher,   }, "attribute": {   "module": "pim/attribute-fetcher",    "options": {"identifier_type":"pim_catalog_identifier","urls":{"list":"pim_enrich_attribute_rest_index","get":"pim_enrich_attribute_rest_get"}},    "resolvedModule": PimAttributeFetcher,   }, "family": {   "module": "pim/base-fetcher",    "options": {"urls":{"list":"pim_enrich_family_rest_index","get":"pim_enrich_family_rest_get"}},    "resolvedModule": PimBaseFetcher,   }, "channel": {   "module": "pim/base-fetcher",    "options": {"urls":{"list":"pim_enrich_channel_rest_index","get":"pim_enrich_channel_rest_get"}},    "resolvedModule": PimBaseFetcher,   }, "locale": {   "module": "pim/locale-fetcher",    "options": {"urls":{"list":"pim_enrich_locale_rest_index"}},    "resolvedModule": PimLocaleFetcher,   }, "measure": {   "module": "pim/base-fetcher",    "options": {"urls":{"list":"pim_enrich_measures_rest_index"}},    "resolvedModule": PimBaseFetcher,   }, "currency": {   "module": "pim/base-fetcher",    "options": {"urls":{"list":"pim_enrich_currency_rest_index"}},    "resolvedModule": PimBaseFetcher,   }, "group": {   "module": "pim/base-fetcher",    "options": {"urls":{"list":"pim_enrich_group_rest_index","get":"pim_enrich_group_rest_get"}},    "resolvedModule": PimBaseFetcher,   }, "variant-group": {   "module": "pim/variant-group-fetcher",    "options": {"urls":{"list":"pim_enrich_variant_group_rest_index","get":"pim_enrich_variant_group_rest_get"}},    "resolvedModule": PimVariantGroupFetcher,   }, "sequential-edit": {   "module": "pim/base-fetcher",    "options": {"urls":{"list":"pim_enrich_mass_edit_action_sequential_edit_get"}},    "resolvedModule": PimBaseFetcher,   }, "product-history": {   "module": "pim/base-fetcher",    "options": {"urls":{"get":"pim_enrich_product_history_rest_get"}},    "resolvedModule": PimBaseFetcher,   }, "product": {   "module": "pim/product-fetcher",    "options": {"urls":{"get":"pim_enrich_product_rest_get"}},    "resolvedModule": PimProductFetcher,   }, "category": {   "module": "pim/base-fetcher",    "options": {"urls":{"list":"pim_enrich_category_rest_list","get":"pim_enrich_category_rest_get"}},    "resolvedModule": PimBaseFetcher,   }, "job-instance-export": {   "module": "pim/base-fetcher",    "options": {"urls":{"get":"pim_enrich_job_instance_rest_export_get"}},    "resolvedModule": PimBaseFetcher,   }, "job-instance-import": {   "module": "pim/base-fetcher",    "options": {"urls":{"get":"pim_enrich_job_instance_rest_import_get"}},    "resolvedModule": PimBaseFetcher,   }, "formats": {   "module": "pim/base-fetcher",    "options": {"urls":{"list":"pim_localization_format_index"}},    "resolvedModule": PimBaseFetcher,   }, "user-group": {   "module": "pim/base-fetcher",    "options": {"urls":{"list":"pim_user_user_group_rest_index"}},    "resolvedModule": PimBaseFetcher,   }, "job-execution": {   "module": "pim/base-fetcher",    "options": {"urls":{"get":"pim_enrich_job_execution_rest_get"}},    "resolvedModule": PimBaseFetcher,   }, "reference-data-configuration": {   "module": "pim/base-fetcher",    "options": {"warmup":false,"urls":{"list":"pim_reference_data_configuration_rest_get"}},    "resolvedModule": PimBaseFetcher,   }, "user": {   "module": "pim/base-fetcher",    "options": {"urls":{"get":"pim_user_user_rest_get"}},    "resolvedModule": PimBaseFetcher,   }, "user_group": {   "module": "pim/base-fetcher",    "options": {"urls":{"list":"pim_user_user_group_rest_index"}},    "resolvedModule": PimBaseFetcher,   },  } });
